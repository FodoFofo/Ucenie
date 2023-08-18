import { ReactNode, useState } from "react";

type ComponentProps = {
  title: string;
  children?: ReactNode | ReactNode[] | string;
  isOpenDefault?: boolean;
};

export const CollapsibleMenu = ({
  children,
  title,
  isOpenDefault = false,
}: ComponentProps) => {
  const [isOpen, setOpen] = useState<boolean>(isOpenDefault);

  const toggleMenuState = () => setOpen(!isOpen);
  return (
    <>
      <h3 onClick={toggleMenuState}>
        {title} {isOpen ? "⤴" : "⤵"}
      </h3>
      {isOpen ? <div className="submenu-container">{children}</div> : null}
    </>
  );
};
