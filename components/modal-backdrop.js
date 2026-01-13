"use client";

import { useRouter } from "next/router";

function ModalBackdrop() {
    const router = useRouter();
    return (
        <>
            <div className="modal-backdrop" onClick={router.back} />
        </>
    );
}

export default ModalBackdrop;
