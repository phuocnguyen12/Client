import clsx from "clsx";
import React, { memo } from "react";

const InputField = ({
  value,
  setValue,
  nameKey,
  type,
  invalidFields,
  setInvalidFieds,
  style,
  fullWidth,
  placeholder,
  isHideLabel,
}) => {
  return (
    <div className={clsx("flex flex-col mb-2", fullWidth && "w-full")}>
      {!isHideLabel && value.trim() !== "" && (
        <label
          className="text-[10px] animate-slide-top-sm absolute top-0 left-[12px] block bg-white px-1"
          htmlFor={nameKey}
        >
          {nameKey?.slice(0, 1).toUpperCase() + nameKey?.slice(1)}
        </label>
      )}
      <input
        type={type || "text"}
        className={clsx(
          "px-4 py2 rounded-lg border w-full mt-2 placeholder:text-xl  outline-none text-black",
          style
        )}
        placeholder={
          placeholder || nameKey?.slice(0, 1).toUpperCase() + nameKey?.slice(1)
        }
        value={value}
        onChange={(e) =>
          setValue((prev) => ({ ...prev, [nameKey]: e.target.value }))
        }
        onFocus={() => setInvalidFieds && setInvalidFieds([])}
      />
      {invalidFields?.some((el) => el.mame === nameKey) && (
        <small className="text-main">
          {invalidFields.find((el) => el.name === nameKey)?.mes}
        </small>
      )}
    </div>
  );
};

export default memo(InputField);
