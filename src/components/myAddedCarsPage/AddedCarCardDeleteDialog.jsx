"use client";

import React, { useTransition } from "react";
import { TriangleExclamation } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";

const AddedCarCardDeleteDialog = ({ car, addedCarDeleteAction }) => {
  const [isPending, startTransition] = useTransition();

  const handleAddedCarDelete = async (carId) => {
    startTransition(async () => {
      const result = await addedCarDeleteAction(carId);

      if (result.deletedCount > 0) {
        toast.success(`${car.carName} remove from your garage`);
      } else {
        toast.error("Delete failed!");
      }
    });
  };

  return (
    <AlertDialog>
      <Button className="w-full flex items-center gap-2 bg-red-600 hover:bg-red-700">
        <MdDelete /> Delete
      </Button>

      <AlertDialog.Backdrop
        className="bg-linear-to-t from-black/70 via-black/30 to-black/10 backdrop-blur-md transition-all duration-300"
        variant="blur"
      >
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-105">
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header className="items-center text-center">
              <AlertDialog.Icon status="danger">
                <TriangleExclamation className="size-5" />
              </AlertDialog.Icon>

              <AlertDialog.Heading>
                Permanently delete this car?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p>
                This car will be permanently removed from your garage. All
                related booking data and details will be lost forever. This
                action cannot be undone.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer className="flex justify-between gap-10">
              <Button className="w-full" slot="close">
                Keep Car
              </Button>

              <Button
                onClick={() => handleAddedCarDelete(car?._id)}
                isDisabled={isPending}
                className="w-full"
                variant="danger"
              >
                {isPending ? "Deleting..." : "Delete Forever"}
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default AddedCarCardDeleteDialog;
