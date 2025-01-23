import React from "react";
import Image from "next/image";
import Link from "next/link";
import { EyeIcon } from "lucide-react";

import { cn, formatDate } from "@/lib/utils";
import { Button } from "./ui/button";
import { Author, Startup } from "@/sanity/types";
import { Skeleton } from "./ui/skeleton";

export type StartupCardType = Omit<Startup, "author"> & {
  author: Author;
};

const StartupCard = ({ post }: { post: StartupCardType }) => {
  const {
    _createdAt,
    views,
    author,
    title,
    category,
    _id,
    image,
    description,
  } = post;
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup-card_date">{formatDate(_createdAt)}</p>

        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${author._id}`}>
            <p className="text-16-medium line-clamp-1">{author?.name}</p>
          </Link>

          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>

        <Link href={`/user/${author._id}`}>
          <Image
            src={
              author.image ||
              "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
            }
            alt="user"
            width={40}
            height={40}
            className="rounded-full"
          />
        </Link>
      </div>
      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc">{description}</p>

        <Image
          src={
            image ||
            "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
          }
          className="startup-card_img"
          alt="placeholder"
          width={500}
          height={500}
        />
      </Link>
      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category?.toLowerCase()}`}>{category}</Link>

        <Button
          className="startup-card_btn"
          asChild
        >
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export const StartupCardSkeleton = () => {
  return (
    <>
      {[0, 1, 2, 3, 4].map((index) => {
        return (
          <li key={cn("skeleton", index)}>
            <Skeleton className="startup-card_skeleton" />
          </li>
        );
      })}
    </>
  );
};
export default StartupCard;
