import React from "react";
import { nameToAvatar } from "../../shared/avatars";

export function Avatar({ player, bordered, iconOnly, isAlt }) {
  const av = player.get("avatar");
  if (!av) {
    return null;
  }

  const avatar = nameToAvatar[av];
  if (!avatar) {
    return null;
  }

  const cn = ["flex justify-center items-center"];
  const cnv = ["h-6 w-6"];

  if (bordered) {
    cn.push("border border-gray-400 px-5 py-1 rounded-full");
    if (isAlt) {
      cn.push("w-48");
    }
  }

  return (
    <div className="inline-block">
      <div className={cn.join(" ")}>
        <div
          className={cnv.join(" ")}
          dangerouslySetInnerHTML={{
            __html: avatar.svg,
          }}
        ></div>
        {iconOnly ? "" : <div className="ml-3 text-gray-500">{av}</div>}
      </div>
    </div>
  );
}
