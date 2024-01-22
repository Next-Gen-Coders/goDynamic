import { CurrentComponent } from "@/constants/typeDefaults";
import { NavbarParams } from "@/constants/types";

const Navbar = ({ setSelectedComponent }: NavbarParams) => {
  return (
    <div className="flex flex-col h-screen justify-center items-center w-fit">
      <button onClick={() => setSelectedComponent(CurrentComponent.Crate)}>
        Crates
      </button>
      <button onClick={() => setSelectedComponent(CurrentComponent.Template)}>
        Templates
      </button>
    </div>
  );
};

export default Navbar;
