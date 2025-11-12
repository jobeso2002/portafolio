import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileClock, Radio, Slice, SquareAsterisk } from "lucide-react";
import Image from "next/image";
import React from "react";


export default function Habilidades() {
  return (
    <section id="habilidades">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-center bg-linear-to-r from-blue-700 via-purple-600 to-black bg-clip-text text-transparent">
        HABILIDADES
      </h1>

      <div>
        <Card>
          <CardHeader>
            <CardTitle>Diseño  </CardTitle> <Slice />
            
            <SquareAsterisk />
            <CardDescription>
              Figma
            </CardDescription>
            <Radio />
            <CardDescription>
              Diseño UI/UX
            </CardDescription>
            <FileClock />
            <CardDescription>
              Canvas
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div>
        <Card>
          <CardHeader>
            <CardTitle>Tecnologias</CardTitle> 
            <Image src='/asset/tecnologia/javascripticono.png' alt="JavaScript" width={32} height={32} />
            <CardDescription>
              
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div>
        <Card>
          <CardHeader>
            <CardTitle>Blandas</CardTitle> 
            <Image src='/asset/tecnologia/javascripticono.png' alt="JavaScript" width={32} height={32} />
            <CardDescription>
              
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
}
