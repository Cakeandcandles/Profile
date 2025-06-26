const button = document.getElementById('future');
let coolStyle = document.getElementById('cool-style');

button.addEventListener('click', () => {
    button.style.display = 'none';
    document.getElementById('normal').disabled = true;
    coolStyle.textContent = `

@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&family=Inter:wght@400;600&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  color: #ffffff;
  padding: 40px 20px;
  line-height: 1.6;
  overflow-x: hidden;
}

header {
  text-align: center;
  margin-bottom: 60px;
  animation: fadeIn 1.5s ease-out forwards;
}

header h1 {
  font-family: 'Orbitron', sans-serif;
  font-size: 4rem;
  color: #00fff7;
  text-shadow: 0 0 10px #00fff7, 0 0 20px #00c2ff;
}

header p {
  font-size: 1.3rem;
  color: #c2f0ff;
  margin-top: 10px;
}

section {
  max-width: 1000px;
  margin: 60px auto;
  padding: 30px 40px;
  background: linear-gradient(145deg, #1f1c2c, #928dab);
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 255, 255, 0.3);
  transform: perspective(1000px) rotateX(1deg);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

section:hover {
  transform: perspective(1000px) rotateX(0);
  box-shadow: 0 12px 50px rgba(255, 0, 255, 0.4);
}

section h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  border-bottom: 2px solid #ff00ff;
  padding-bottom: 10px;
  color: #ffffff;
  text-shadow: 0 0 5px #ff00ff;
}

section p,
section li {
  font-size: 1.15rem;
  color: #e0e0ff;
  margin-bottom: 10px;
}

ul {
  list-style: none;
  padding-left: 0;
}

li::before {
  /*content: "🌟 ";*/
  content: "🪐 ";
  color: #ff00ff;
}

a {
  color: #00fff7;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.2s;
}

a:hover {
  color: #ff00ff;
  text-shadow: 0 0 8px #ff00ff;
}

footer {
  text-align: center;
  margin-top: 80px;
  padding-top: 30px;
  font-size: 1rem;
  color: #bbbbff;
  border-top: 1px solid #ffffff33;
}

/* Keyframes */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}`;})
