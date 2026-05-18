import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";

const GoogleLoginBtn = () => {
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setLoading(true);

    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    setLoading(false);
  };
  return (
    <div className="flex justify-center">
      <Button
        onClick={handleGoogleLogin}
        variant="outline"
        className={
          "px-15 flex gap-4 rounded-lg hover:bg-zinc-100 dark:hover:text-[#020909] active:bg-zinc-200"
        }
      >
        {loading ? (
          "Please wait..."
        ) : (
          <>
            <span>
              <FaGoogle />
            </span>

            <span>Google</span>
          </>
        )}
      </Button>
    </div>
  );
};

export default GoogleLoginBtn;
