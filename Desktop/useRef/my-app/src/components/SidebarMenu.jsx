import React, { forwardRef } from 'react';

const SidebarMenu = forwardRef((props,ref) => {
    return (
        <div className={`w-[300px] bg-gray-900 shadow-md top-0 fixed left-0 transition-all bottom-0  z-10 ${props.show ? "" : "-translate-x-full"}`} ref={ref}>
          
        </div>
    );
});

export default SidebarMenu;