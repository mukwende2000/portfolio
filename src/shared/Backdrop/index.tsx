import { MouseEventHandler } from "react";

type Props = {
  onBackdropClick: MouseEventHandler;
  zIndex?: string;
};

function index({ onBackdropClick, zIndex }: Props) {
  return (
    <div
      onClick={onBackdropClick}
      className={`fixed ${zIndex} left-0 right-0 top-0 bottom-0 bg-black/70`}
    />
  );
}
export default index;
