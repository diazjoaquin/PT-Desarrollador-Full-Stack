import { Button } from "../../common/components/Button";
import { useAuth } from "../../hooks/useAuth";

export const Navbar = () => {
	const { handleLogOut } = useAuth();

  return (
    <div className="h-16 w-screen flex flex-row justify-end items-center">
      <div className="px-8">
        <Button label="Logout" type="button" onClick={handleLogOut}/>
      </div>
    </div>
  )
};