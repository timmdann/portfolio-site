function Avatar() {
  return (
    <div
      className="
        relative
        w-[180px] aspect-square rounded-full overflow-hidden
        border-[3px] border-[var(--mist-50)]
        shadow-[0_18px_40px_rgba(var(--grey-900-rgb),0.85)]
        mt-[100px] mb-[30px]
        md:w-[240px] md:mt-[150px] md:mb-[40px]
        lg:w-[280px] lg:mt-[200px] lg:mb-[50px]
        mx-auto
      "
    >
      <img
        src="/avatar.jpg"
        alt="Daniil Tymofieiev"
        className="w-full h-full object-cover block transform-gpu"
      />
    </div>
  );
}

export default Avatar;
