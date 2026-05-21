"use client";

import React, { useState } from "react";
import {
  Button,
  Dropdown,
  Label,
  Modal,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";
import { ChevronDown } from "lucide-react";
import { MdOutlineAddBox } from "react-icons/md";

const CarBookingModal = ({ car, bookingsAddAction }) => {
  const [note, setNote] = useState("");
  const [driverNeeded, setDriverNeeded] = useState("");
  const [errors, setErrors] = useState({});

  const handleBooking = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!driverNeeded) {
      newErrors.driverNeeded = "Please select driver option";
    }

    if (!note.trim()) {
      newErrors.note = "Note is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const formData = {
      carId: car._id,
      driverNeeded,
      note,
    };

    return bookingsAddAction(formData);
  };

  return (
    <Modal>
      <Button
        isDisabled={!car.availabilityStatus}
        className={`mt-4 w-fit px-6 ${
          car.availabilityStatus
            ? "bg-[#B81D23] hover:bg-[#a1161b]"
            : "bg-gray-600 cursor-not-allowed"
        }`}
      >
        {car.availabilityStatus ? "Book Now" : "Not Available"}
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon className="bg-[#B81D23]/20 text-[#B81D23]">
                <MdOutlineAddBox className="size-5" />
              </Modal.Icon>

              <Modal.Heading>Book This Car</Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface variant="default" className="bg-transparent">
                <form onSubmit={handleBooking} className="flex flex-col gap-4">
                  {/* Driver Needed */}
                  <TextField isRequired>
                    <Label>Driver Needed</Label>

                    <Dropdown>
                      <Button className="px-3 py-3 w-full rounded-lg h-auto justify-between bg-white/5 shadow-sm text-zinc-500!">
                        <span
                          className={
                            driverNeeded ? "text-black! dark:text-white!" : ""
                          }
                        >
                          {driverNeeded || "Select Option"}
                        </span>

                        <ChevronDown />
                      </Button>

                      <Dropdown.Popover>
                        <Dropdown.Menu onAction={(key) => setDriverNeeded(key)}>
                          <Dropdown.Item id="Yes">Yes</Dropdown.Item>
                          <Dropdown.Item id="No">No</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown.Popover>
                    </Dropdown>

                    {errors.driverNeeded && (
                      <p className="text-red-500 text-sm">
                        {errors.driverNeeded}
                      </p>
                    )}
                  </TextField>

                  {/* Note */}
                  <TextArea
                    placeholder="Any special request..."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="bg-white/5 "
                  />

                  {errors.note && (
                    <p className="text-red-500 text-sm">{errors.note}</p>
                  )}

                  {/* Submit */}
                  <Button
                    type="submit"
                    className="w-full bg-[#B81D23] hover:bg-[#a1161b] mt-2"
                  >
                    Book Now
                  </Button>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default CarBookingModal;
