import '../../styles/styles.css';
import React from 'react';

type SignUpModalProps = {
  show: boolean;
  children: React.ReactNode;
};

function SignUpModal({ show, children }: SignUpModalProps) {
  return (
    <div
      className={`${show ? 'absolute inset-0 flex items-center justify-center bg-stone-100 dark:bg-stone-800' : 'hidden'}`}
    >
      <section className="relative block">{children}</section>
    </div>
  );
}

export default SignUpModal;
