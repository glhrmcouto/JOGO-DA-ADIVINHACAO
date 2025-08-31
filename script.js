<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jogo da Adivinhação</title>
</head>

<body>
    <h1>Jogo da Adivinhação</h1>
    <p> Tente adivinhar o número de 1 a 20:</p>

    <input type="number" id="palpite">
    <button onclick="jogar()">Enviar</button>
    <p id="mensagem"></p>

    <script>
        const numeroSecreto = Math.floor(Math.random() * 20) + 1;

        function jogar() {

            const num = parseInt(document.getElementById("palpite").value);
            const msg = document.getElementById("mensagem");

            if (num === numeroSecreto) msg.textContent = "Acertou!";
            else if (num < numeroSecreto) msg.textContent = "muito baixo!";
            else msg.textContent = "muito alto!";

        }


    </script>

</body>

</html>
