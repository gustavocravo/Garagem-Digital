let dados = [
    {
        titulo: "Golf GTI MK7.5",
        descricao: "O Golf GTI MK7.5 é uma versão aprimorada do icônico hot hatch da Volkswagen, combinando desempenho esportivo com elegância e tecnologia avançada. Equipado com um motor 2.0 turbo de 230 a 245 cavalos de potência, ele oferece uma condução ágil e empolgante. Com design refinado e atualizações no interior, como a central multimídia e recursos de assistência ao motorista, o MK7.5 mantém o equilíbrio perfeito entre conforto diário e adrenalina nas pistas.",
        link: "https://www.youtube.com/watch?v=dq1g8IdgnhU&t=5s",
        tags: "golf gti golfao mk7.5 mk",
        imagem: "../img/gti.webp"
    },
    {
        titulo: "Jetta GLI",
        descricao: "O Jetta GLI é a versão esportiva do clássico sedã da Volkswagen, conhecido por combinar elegância e alto desempenho. Equipado com um motor 2.0 turbo de 230 cavalos e transmissão DSG de dupla embreagem, ele oferece uma condução ágil e envolvente. Além disso, o Jetta GLI se destaca pelo seu design moderno, acabamento premium e tecnologias avançadas de assistência ao motorista, tornando-o uma escolha ideal para quem busca conforto e esportividade.",
        link: "https://www.vw.com.br/pt/carros/Jetta.html",
        tags: "jetta jeta gli",
        imagem: "../img/jetta.webp"
    },
    {
        titulo: "BMW M3",
        descricao: "O BMW M3 G80 é a mais recente evolução do icônico sedã esportivo da marca alemã. Lançado em 2020, o modelo combina design agressivo com tecnologia avançada, oferecendo um motor 3.0L biturbo de 6 cilindros, capaz de gerar até 510 cv na versão Competition. Com tração traseira ou integral, o M3 G80 é uma obra-prima em performance e dirigibilidade, mantendo a tradição M de proporcionar uma experiência de condução emocionante e precisa.",
        link: "https://www.bmw.com.br/pt/all-models/m-series/m3-sedan/2020/bmw-serie-3-berlina-versao-m-visao-geral.html",
        tags: "bmw m3",
        imagem: "../img/m3.webp"
    },
    {
        titulo: "BMW X6 M",
        descricao: "A BMW X6 M é um SUV de alto desempenho que combina luxo e potência em um design esportivo e robusto. Equipado com um motor V8 biturbo, ela entrega mais de 600 cavalos de potência, proporcionando uma experiência de direção emocionante. Com tecnologia de ponta e acabamento premium, a X6 M é ideal para quem busca conforto, estilo e performance em um único veículo.",
        link: "https://www.bmw.com.br/pt/all-models/m-series/x6-m/2023/bmw-x6-m-competition.html",
        tags: "bmw x6",
        imagem: "../img/x6.jpg"
    },
    {
        titulo: "Lamborghini Urus",
        descricao: "A Lamborghini Urus é um SUV de luxo que combina o desempenho extremo de um supercarro com a versatilidade e conforto de um utilitário esportivo. Equipado com um motor V8 biturbo de 650 cavalos de potência, ele atinge velocidades impressionantes, enquanto oferece design agressivo e tecnologia de ponta, mantendo o DNA icônico da marca Lamborghini.",
        link: "https://www.lamborghini.com/en-en/models/urus",
        tags: "lamborghini urus lamborguini",
        imagem: "../img/urus.jpg"
    },
    {
        titulo: "Nissan GT-R R35",
        descricao: "O Nissan GT-R R35 é um ícone de alta performance, conhecido por sua combinação impressionante de tecnologia avançada e potência bruta. Lançado em 2007, o R35 traz um motor V6 biturbo de 3.8 litros, capaz de entregar acelerações rápidas e dirigibilidade precisa. Com um sistema de tração integral e um design agressivo, ele oferece desempenho de supercarro a um preço mais acessível, conquistando fãs ao redor do mundo.",
        link: "https://www.nissan.com.br/experiencia-nissan/gt-r.html",
        tags: "nissa gt-r r35 gt",
        imagem: "../img/r35.jpg"
    },
    {
        titulo: "Porsche 911 GT3 RS",
        descricao: "O Porsche 911 GT3 RS é um ícone de desempenho e engenharia, projetado para entusiastas de esportivos e pista. Com um motor atmosférico de 4.0 litros e um design aerodinâmico avançado, o GT3 RS oferece uma experiência de direção emocionante e precisa. A combinação de potência extrema e suspensão ajustada para o circuito faz deste carro uma máquina de desempenho imbatível, que reflete a dedicação da Porsche à inovação e à excelência no automobilismo.",
        link: "https://www.porsche.com/brazil/pt/models/911/911-gt3-rs/911-gt3-rs/",
        tags: "porsche 911 gt3 rs",
        imagem: "../img/gt3.webp"
    },
    {
        titulo: "Porsche 911 Turbo S",
        descricao: "O Porsche 911 Turbo S é um ícone de desempenho e inovação no mundo dos esportivos de luxo. Com seu motor turboalimentado de 3,8 litros, produzindo impressionantes 640 cavalos de potência, o 911 Turbo S combina aceleração explosiva com uma dinâmica de condução refinada. Seu design aerodinâmico e interior sofisticado proporcionam uma experiência de direção emocionante e confortável, enquanto as tecnologias avançadas garantem um controle preciso em qualquer situação. É a definição perfeita de potência e elegância em um carro esportivo.",
        link: "https://www.porsche.com/brazil/pt/models/911/911-turbo-models/911-turbo-s/",
        tags: "porsche 911 turbo s",
        imagem: "../img/turbo.jpg"
    },
    {
        titulo: "Audi RS6",
        descricao: "O Audi RS6 é um esportivo de alta performance que combina potência, agilidade e sofisticação. Equipado com um motor V8 biturbo de 4.0 litros, o RS6 oferece uma aceleração impressionante e uma velocidade máxima de 250 km/h, podendo ser ampliada para 280 km/h com o pacote opcional. Seu design robusto e aerodinâmico, aliado a uma suspensão adaptativa, garante uma condução dinâmica e confortável. No interior, o RS6 não decepciona, com acabamentos luxuosos e tecnologia de ponta, incluindo um sistema de infotainment avançado e uma cabine espaçosa, tornando-o uma escolha de destaque para os entusiastas de carros esportivos que buscam tanto desempenho quanto elegância.",
        link: "https://www.audi.com.br/br/web/pt/models/a6/rs-6-avant.html",
        tags: "audi rs6",
        imagem: "../img/audi.webp"
    },
    {
        titulo: "Lamborghini Huracan",
        descricao: "O Lamborghini Huracán é um superesportivo que combina design arrojado com desempenho excepcional. Lançado em 2014, ele é equipado com um motor V10 de 5,2 litros, que entrega uma potência impressionante e acelera de 0 a 100 km/h em menos de 3 segundos. O Huracán é conhecido por seu chassi leve e ágil, proporcionando uma experiência de condução emocionante e precisa. Seu visual elegante e suas linhas agressivas refletem a filosofia de design da Lamborghini, tornando-o um ícone no mundo dos carros esportivos de luxo.",
        link: "https://www.lamborghini.com/en-en/models/huracan",
        tags: "lamborghini huracan",
        imagem: "../img/huracan.jpg"
    },
    {
        titulo: "McLaren 720s",
        descricao: "O McLaren 720S é um supercarro de alta performance que representa o ápice da engenharia automotiva da McLaren. Lançado em 2017, o 720S faz parte da linha Super Series da marca e é conhecido por seu design aerodinâmico e leveza, resultando em uma experiência de condução excepcional. Equipado com um motor V8 biturbo de 4.0 litros que produz 720 cavalos de potência, o 720S acelera de 0 a 100 km/h em apenas 2,7 segundos. Sua combinação de potência, tecnologia e estilo o torna um dos carros mais impressionantes da atualidade.",
        link: "https://cars.mclaren.com/br-pt/super-series/720s",
        tags: "mclaren 720",
        imagem: "../img/mclaren.jpg"
    },
    {
        titulo: "Ferrari 812 GTS",
        descricao: "A Ferrari 812 GTS é um exemplar impressionante da engenharia automotiva italiana, combinando luxo e desempenho em um conversível de alto nível. Equipado com um motor V12 de 6.5 litros, que produz impressionantes 800 cv, o 812 GTS oferece uma experiência de condução emocionante, com aceleração rápida e um som de motor inconfundível. Seu design elegante e aerodinâmico não apenas aprimora a estética, mas também contribui para a estabilidade e o desempenho em alta velocidade. Com um interior refinado e cheio de tecnologia, o 812 GTS representa o ápice da performance e do estilo no segmento dos supercarros.",
        link: "https://www.ferrari.com/en-EN/auto/812-gts",
        tags: "ferrari 812 gts",
        imagem: "../img/812.jpg"
    }
];