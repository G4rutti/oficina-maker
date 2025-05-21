import type { Curso } from "@/types/curso"

export const cursos: Curso[] = [
  {
    id: "arduino-intro",
    titulo: "Introdução ao Arduino",
    instrutor: "Iago de Oliveira",
    categoria: "Eletrônica",
    nivel: "Iniciante",
    thumbnail: "/arduino.jpg?height=400&width=600",
    aulas: [
      {
        id: "aula-1",
        titulo: "O que é Arduino?",
        videoUrl: "https://www.youtube.com/watch?v=rCILKZPG0Kg",
        descricao:
          "Introdução geral sobre o Arduino e suas aplicações. Nesta aula você vai aprender o que é uma placa Arduino, como ela funciona e quais são os principais modelos disponíveis no mercado.",
      },
      {
        id: "aula-2",
        titulo: "Instalando o IDE",
        videoUrl: "https://www.youtube.com/watch?v=rCILKZPG0Kg",
        descricao:
          "Passo a passo para instalar o ambiente de desenvolvimento Arduino IDE no seu computador. Vamos configurar todas as dependências necessárias para começar a programar.",
      },
      {
        id: "aula-3",
        titulo: "Primeiro Projeto: LED Piscante",
        videoUrl: "https://www.youtube.com/watch?v=rCILKZPG0Kg",
        descricao:
          'Vamos criar nosso primeiro projeto funcional: um LED que pisca em intervalos regulares. Este é o "Hello World" do mundo Arduino!',
      },
    ],
  },
  {
    id: "raspberry-pi",
    titulo: "Projetos com Raspberry Pi",
    instrutor: "Davi Garutti Diniz",
    categoria: "Programação",
    nivel: "Intermediário",
    thumbnail: "/raspberry.jpg?height=400&width=600",
    aulas: [
      {
        id: "aula-1",
        titulo: "Conhecendo o Raspberry Pi",
        videoUrl: "https://www.youtube.com/watch?v=rCILKZPG0Kg",
        descricao: "Uma introdução ao mini-computador Raspberry Pi, suas versões e possibilidades de uso.",
      },
      {
        id: "aula-2",
        titulo: "Instalando o Raspbian",
        videoUrl: "https://www.youtube.com/watch?v=rCILKZPG0Kg",
        descricao: "Como instalar e configurar o sistema operacional Raspbian no seu Raspberry Pi.",
      },
      {
        id: "aula-3",
        titulo: "Criando um servidor web",
        videoUrl: "https://www.youtube.com/watch?v=rCILKZPG0Kg",
        descricao: "Aprenda a configurar um servidor web completo usando o Raspberry Pi.",
      },
    ],
  },
  {
    id: "impressao-3d",
    titulo: "Fundamentos de Impressão 3D",
    instrutor: "Victor Hugo dos Santos",
    categoria: "Impressão 3D",
    nivel: "Iniciante",
    thumbnail: "/3d.jpg?height=400&width=600",
    aulas: [
      {
        id: "aula-1",
        titulo: "Tipos de Impressoras 3D",
        videoUrl: "https://www.youtube.com/watch?v=rCILKZPG0Kg",
        descricao: "Conheça os diferentes tipos de impressoras 3D disponíveis no mercado e suas aplicações.",
      },
      {
        id: "aula-2",
        titulo: "Materiais para Impressão",
        videoUrl: "https://www.youtube.com/watch?v=rCILKZPG0Kg",
        descricao: "Aprenda sobre os diferentes filamentos e materiais usados na impressão 3D.",
      },
      {
        id: "aula-3",
        titulo: "Modelagem 3D Básica",
        videoUrl: "https://www.youtube.com/watch?v=rCILKZPG0Kg",
        descricao: "Introdução à modelagem 3D usando ferramentas gratuitas como o TinkerCAD.",
      },
    ],
  },
  {
    id: "robotica-educacional",
    titulo: "Robótica Educacional",
    instrutor: "Ana Julia",
    categoria: "Robótica",
    nivel: "Iniciante",
    thumbnail: "/robotica.jpg?height=400&width=600",
    aulas: [
      {
        id: "aula-1",
        titulo: "Introdução à Robótica",
        videoUrl: "https://www.youtube.com/watch?v=rCILKZPG0Kg",
        descricao: "O que é robótica e como ela pode ser aplicada na educação.",
      },
      {
        id: "aula-2",
        titulo: "Montando seu Primeiro Robô",
        videoUrl: "https://www.youtube.com/watch?v=rCILKZPG0Kg",
        descricao: "Passo a passo para montar um robô simples com materiais acessíveis.",
      },
      {
        id: "aula-3",
        titulo: "Programação Básica de Robôs",
        videoUrl: "https://www.youtube.com/watch?v=rCILKZPG0Kg",
        descricao: "Como programar seu robô para executar tarefas simples.",
      },
    ],
  },
  {
    id: "iot-basico",
    titulo: "Internet das Coisas (IoT) Básico",
    instrutor: "Eduardo",
    categoria: "Eletrônica",
    nivel: "Intermediário",
    thumbnail: "/iot.jpg?height=400&width=600",
    aulas: [
      {
        id: "aula-1",
        titulo: "O que é IoT?",
        videoUrl: "https://www.youtube.com/watch?v=rCILKZPG0Kg",
        descricao: "Introdução ao conceito de Internet das Coisas e suas aplicações no dia a dia.",
      },
      {
        id: "aula-2",
        titulo: "Sensores e Atuadores",
        videoUrl: "https://www.youtube.com/watch?v=rCILKZPG0Kg",
        descricao: "Conheça os principais sensores e atuadores usados em projetos IoT.",
      },
      {
        id: "aula-3",
        titulo: "Projeto: Monitoramento Remoto",
        videoUrl: "https://www.youtube.com/watch?v=rCILKZPG0Kg",
        descricao: "Crie um sistema de monitoramento remoto usando ESP8266 e plataformas IoT.",
      },
    ],
  },
  {
    id: "circuitos-eletronicos",
    titulo: "Circuitos Eletrônicos para Iniciantes",
    instrutor: "Arthur Henrique e Pedro Antônio",
    categoria: "Eletrônica",
    nivel: "Iniciante",
    thumbnail: "/circuitos.png?height=400&width=600",
    aulas: [
      {
        id: "aula-1",
        titulo: "Componentes Básicos",
        videoUrl: "https://www.youtube.com/watch?v=rCILKZPG0Kg",
        descricao: "Conheça os componentes eletrônicos básicos: resistores, capacitores, LEDs e mais.",
      },
      {
        id: "aula-2",
        titulo: "Leitura de Esquemáticos",
        videoUrl: "https://www.youtube.com/watch?v=rCILKZPG0Kg",
        descricao: "Aprenda a interpretar esquemas eletrônicos e diagramas de circuito.",
      },
      {
        id: "aula-3",
        titulo: "Montagem em Protoboard",
        videoUrl: "https://www.youtube.com/watch?v=rCILKZPG0Kg",
        descricao: "Como montar circuitos em protoboard de forma organizada e funcional.",
      },
    ],
  },
]
