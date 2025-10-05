"use client";

import { useEffect, useRef } from "react";

export function CanvasView() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let animationFrameId: number;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const earthRadius = 50;
    const satelliteRadius = 10;
    const orbitRadius = 100;
    let angle = 0;

    const earthImage = new Image();
    // Coloque a imagem que você quer usar na pasta /public do seu projeto
    earthImage.src = "/terra.png";

    // Garante que a animação só comece depois que a imagem for carregada
    earthImage.onload = () => {
      const draw = () => {
        // Limpa o canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Define o novo tamanho para a imagem
        const imageWidth = 100; // Nova largura em pixels
        const imageHeight = 100; // Nova altura em pixels

        // Desenha a imagem da Terra no centro com o novo tamanho
        const imgX = centerX - imageWidth / 2;
        const imgY = centerY - imageHeight / 2;
        context.drawImage(earthImage, imgX, imgY, imageWidth, imageHeight);
        // Calcula a posição do satélite
        const satelliteX = centerX + orbitRadius * Math.cos(angle);
        const satelliteY = centerY + orbitRadius * Math.sin(angle);

        // Desenha o satélite (círculo cinza)
        context.beginPath();
        context.arc(satelliteX, satelliteY, satelliteRadius, 0, 2 * Math.PI);
        context.fillStyle = "grey";
        context.fill();

        // Atualiza o ângulo para a animação
        angle += 0.01;

        animationFrameId = requestAnimationFrame(draw);
      };
      draw();
    };

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} width="300" height="300" />;
}