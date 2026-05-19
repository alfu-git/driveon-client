import React from "react";
import { ArrowRightFromSquare } from "@gravity-ui/icons";
import { Avatar, Button, Dropdown } from "@heroui/react";
import Link from "next/link";

const AvatarDropdown = ({ user }) => {
  return (
    <Dropdown>
      <Dropdown.Trigger className="sm:mr-3 rounded-full">
        <Avatar>
          <Avatar.Image alt={user?.name} src={user?.image} />
          <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
        </Avatar>
      </Dropdown.Trigger>

      <Dropdown.Popover>
        <div className="px-3 pt-3 pb-1">
          <div className="flex items-center gap-2">
            <Avatar size="sm">
              <Avatar.Image alt={user?.name} src={user?.image} />
              <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
            </Avatar>

            <div className="flex flex-col gap-0">
              <p className="text-sm leading-5 font-medium">{user?.name}</p>
              <p className="text-xs leading-none text-muted">{user?.email}</p>
            </div>
          </div>
        </div>

        <Dropdown.Menu>
          <Dropdown.Item>
            <Link href={"/add-car"}>Add Car</Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <Link href={"/my-bookings"}>My Bookings</Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <Link href={"/my-added-cars"}>My Added Cars</Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <Button className="px-0 h-auto bg-transparent  flex w-full items-center justify-between gap-2">
              <label>Log Out</label>
              <ArrowRightFromSquare className="size-3.5 text-primary" />
            </Button>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
};

export default AvatarDropdown;
