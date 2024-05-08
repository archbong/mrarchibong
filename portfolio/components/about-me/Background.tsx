import React from "react";
import Card from "../Card";
import Subtitle from "../typography/subtitle/Subtitle";

export default function Background() {
  return (
    <Card>
      <div>
        <Subtitle className="p-5 uppercase">My background</Subtitle>
        <div className="px-5">
          <p className="py-5">
            Growing up in Brasília, the modernist architectural capital of
            Brazil, my home was a fusion of creativity and analytical thinking,
            influenced by my father&lsquo;s career as a photographer and my
            mother&lsquo;s profession as a lawyer. This unique blend has deeply
            shaped my perspective.
          </p>
          <p className="py-5">
            My fascination with technology began at age four, sparked by our
            trusty beige computer. Although I pursued a degree in Computer
            Science, my true passion lies in the transformative power of great
            design craft, mainly inspired by the design craftsmanship behind
            Apple products.
          </p>
          <p className="py-5">
            My curiosity led me to wonder: could I also create something that
            can evoke this effect on people?
          </p>
          <p className="py-5">
            Today, I apply my multidisciplinary design skills, aiming to create
            solutions that make people feel and remember, elevating everyday
            experiences into inspiring solutions.
          </p>
        </div>
      </div>
    </Card>
  );
}
