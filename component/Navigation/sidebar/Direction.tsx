import { Input } from "@/component/shared/ui/input";
import React from "react";
import DirectionSearch from "./DirectionSearch";
import RouteDetails from "./RouteDetails";

const Direction = ({
  active,
  shouldNavigateOnClose = true,
}: {
  active: boolean;
  shouldNavigateOnClose?: boolean;
}) => {
  return (
    <div className={`${active ? "block" : "hidden"}`}>
      <div className="p-4">
        <DirectionSearch shouldNavigateOnClose={shouldNavigateOnClose} />
      </div>
      <RouteDetails />
    </div>
  );
};

export default Direction;
