import { motion } from "framer-motion";

/*
  Wheel positions as % of the bicycle image.
  x / y = center of the wheel (hub), size = wheel width as % of the bike.
  Set DEBUG = true to see red dots on the hubs while adjusting.
*/
const WHEELS = [
  { id: "back", x: 26, y: 75, size: 28 },
  { id: "front", x: 73, y: 76, size: 28 },
];

const DEBUG = false;

const FRAME_SRC = encodeURI("images/Cycle without wheels.png");
const WHEEL_SRC = encodeURI("images/Centered Wheel.png");

const ease = [0.22, 1, 0.36, 1];

/*
  speed      → seconds for ONE full wheel turn. Lower = faster.
               1 = fast, 2.5 = medium, 5 = slow
  direction  → "left"  = wheels spin anticlockwise (bike rides to the left)
               "right" = wheels spin clockwise     (bike rides to the right)
*/
const HeroAnimation = ({ speed = 2.5, direction = "left" }) => {
  const goingLeft = direction === "left";
  const turn = goingLeft ? -360 : 360;

  return (
    <div className="relative w-full overflow-hidden">
      {/* Rides in once from the side it's coming from */}
      <motion.div
        className="relative w-full"
        initial={{ x: goingLeft ? "60%" : "-60%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.4, ease }}
      >
        <motion.div
          className="relative w-full"
          animate={{ y: [0, -4, 0, -2, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        >
          {WHEELS.map((w) => (
            <motion.img
              key={w.id}
              src={WHEEL_SRC}
              alt=""
              aria-hidden="true"
              className="absolute z-0 aspect-square h-auto"
              style={{
                left: `${w.x}%`,
                top: `${w.y}%`,
                width: `${w.size}%`,
                x: "-50%",
                y: "-50%",
                outline: DEBUG ? "2px dashed red" : undefined,
              }}
              animate={{ rotate: turn }}
              transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
            />
          ))}

          <img
            src={FRAME_SRC}
            alt="Illustrated bicycle carrying children's books"
            className="relative z-10 block h-auto w-full"
          />

          {DEBUG &&
            WHEELS.map((w) => (
              <span
                key={`dot-${w.id}`}
                className="absolute z-20 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600"
                style={{ left: `${w.x}%`, top: `${w.y}%` }}
              />
            ))}
        </motion.div>
      </motion.div>

    </div>
  );
};

export default HeroAnimation;