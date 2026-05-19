import React from "react";
import { ArrowRightFromSquare } from "@gravity-ui/icons";
import { Avatar, Button, Dropdown } from "@heroui/react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { motion } from "framer-motion";

const AvatarDropdown = ({ user }) => {
  const router = useRouter();

  const handleLogOut = async () => {
    await authClient.signOut();
    router.push("/");
  };

  return (
    <Dropdown>
      <Dropdown.Trigger className="mr-1 sm:mr-3 lg:mr-5 rounded-full">
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 18,
            mass: 0.6,
          }}
          className="relative inline-block"
        >
          {/* animated glow */}
          <div className="absolute inset-0 rounded-full bg-primary blur-sm animate-pulseGlow" />

          <Avatar className="relative z-10 cursor-pointer transition-transform duration-300">
            <Avatar.Image alt={user?.name} src={user?.image} />

            <Avatar.Fallback>
              {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
            </Avatar.Fallback>
          </Avatar>
        </motion.div>
      </Dropdown.Trigger>

      <Dropdown.Popover>
        <div className="px-3 pt-3 pb-1">
          <div className="flex items-center gap-2">
            <Avatar size="sm">
              <Avatar.Image alt={user?.name} src={user?.image} />

              <Avatar.Fallback delayMs={600}>
                {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
              </Avatar.Fallback>
            </Avatar>

            <div className="flex flex-col gap-0">
              <p className="text-sm leading-5 font-medium">{user?.name}</p>
              <p className="text-xs leading-none text-muted">{user?.email}</p>
            </div>
          </div>
        </div>

        <Dropdown.Menu>
          <Dropdown.Item href={"/add-car"}>Add Car</Dropdown.Item>

          <Dropdown.Item href={"/my-bookings"}>My Bookings</Dropdown.Item>

          <Dropdown.Item href={"/my-added-cars"}>My Added Cars</Dropdown.Item>

          <Dropdown.Item>
            <Button
              onClick={handleLogOut}
              className="px-0 h-auto bg-transparent  flex w-full items-center justify-between gap-2"
            >
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
