import { useEffect } from "react";



export function useOutsideClick(currentRef, callback) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (currentRef.current && !currentRef.current.contains(event.target)) {
                callback();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });
}
