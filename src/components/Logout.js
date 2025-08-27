import React from "react";
import { useState } from "react";
import LogoutDialog from "./LogoutDialog";

const Logout = () => {
    const [btnName,setBtnName] = useState("Logout");
    const [isLogoutDialogOpen, setLogoutDialogOpen] = useState(false);

  const handleLogout = () => {
    // Implement your logout logic here
    console.log('Logout logic goes here');
    // Close the dialog after logout
    setLogoutDialogOpen(true);
  };
  return (
    <div>
      <button className="font-semibold" onClick={handleLogout}>
        {" "}
        {btnName}{" "}
      </button>
      <LogoutDialog
        isOpen={isLogoutDialogOpen}
        onClose={() => setLogoutDialogOpen(false)}
        onConfirm={handleLogout}
      />
    </div>
  );
};
export default Logout;
