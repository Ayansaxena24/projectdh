import React from "react";
import { useState } from "react";

const Card = () => {

    

  return (
    <Card>
      <div class="bg-white rounded-lg p-6 shadow-xl">
        <slot>
            
        </slot>
      </div>
    </Card>
  );
};
