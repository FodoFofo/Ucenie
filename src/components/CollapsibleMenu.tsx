import { ReactNode, useState } from "react";

// ikony
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

type ComponentProps = {
  title: string;
  children?: ReactNode | ReactNode[] | string;
  isOpenDefault?: boolean;
};

export const CollapsibleMenu = ({
  children,
  title,
  isOpenDefault = true,
}: ComponentProps) => {
  const [isOpen, setOpen] = useState<boolean>(isOpenDefault);

  const toggleMenuState = () => setOpen(!isOpen);
  return (
    <>
      <h3 onClick={toggleMenuState}>
        {title} {isOpen ? <BiSolidUpArrow /> : <BiSolidDownArrow />}
      </h3>
      {isOpen ? <div className="submenu-container">{children}</div> : null}
    </>
  );
};
