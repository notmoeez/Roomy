"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "./Button";

interface ReviewFormProps {
  listingId: string;
  onClose: () => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ listingId, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      rating: "",
      comment: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    try {
      await axios.post(`/api/reviews/${listingId}`, data);
      toast.success("Review submitted!");
      reset();
      onClose();
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Rating
        </label>
        <input
          type="number"
          min="1"
          max="5"
          {...register("rating", { required: true })}
          className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
        {errors.rating && (
          <span className="text-red-500">Rating is required</span>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Comment
        </label>
        <textarea
          {...register("comment", { required: true })}
          className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
        {errors.comment && (
          <span className="text-red-500">Comment is required</span>
        )}
      </div>
      {/* <Button
        type="submit"
        label="Submit Review"
        disabled={isLoading}
        loading={isLoading}
      /> */}
      <button className="bg-orange-600 rounded-md p-2" type="submit">
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;
