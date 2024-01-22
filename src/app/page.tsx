"use client";
import Crates from "@/components/crates/Crates";
import Navbar from "@/components/navbar/Navbar";
import Templates from "@/components/templates/Templates";
import { CurrentComponent } from "@/constants/typeDefaults";
import { ReactElement, useState } from "react";

export default function Home() {
  const [currentComponent, setCurrentComponent] = useState<ReactElement>(
    <Templates />
  );

  const setSelectedComponent = (_currentComponent: CurrentComponent) => {
    if (_currentComponent === CurrentComponent.Crate) {
      setCurrentComponent(<Crates />);
    } else if (_currentComponent === CurrentComponent.Template) {
      setCurrentComponent(<Templates />);
    }
  };

  return (
    <div className="flex ">
      <Navbar
        setSelectedComponent={(_currentComponent: CurrentComponent) =>
          setSelectedComponent(_currentComponent)
        }
      />
      <div>{currentComponent}</div>
    </div>
  );
}
