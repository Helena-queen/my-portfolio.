const BackgroundDecoration = () => {
  return (
    <>
      <div
        className="absolute -top-60 -left-60 h-[700px] w-[700px] rounded-full blur-[180px]"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,.45) 0%, rgba(249,115,22,.15) 40%, transparent 75%)",
        }}
      />
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-orange-600/15 blur-[170px]" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
      >
        <path
          d="
            M -100 220
            C 250 50,
              450 650,
              800 500
            S 1300 120,
              1700 520
          "
          className="stroke-gray-300 dark:stroke-gray-600"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity="0.45"
        />
      </svg>

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
      >
        <path
          d="
            M -150 80
            C 250 280,
              600 100,
              950 300
            S 1400 650,
              1700 420
          "
          className="stroke-gray-400 dark:stroke-gray-600"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.25"
        />
      </svg>
    </>
  );
};

export default BackgroundDecoration;
