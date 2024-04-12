import { useState, useEffect } from "react";
import Button from "./Button";
import "./PalindromeCheker.scss";

function PalindromeChecker() {
  const [word, setWord] = useState("");
  const [isPalindrome, setIsPalindrome] = useState(false);

  const checkPalindrome = () => {
  const regex = /[^a-zA-Z0-9]/g;
    const lowercaseWord = word.toLowerCase().replace(regex, '')

    const reversedWord = lowercaseWord.split("").reverse().join("");
    setIsPalindrome(lowercaseWord === reversedWord);
  };

  const isInputEmpty = word.trim() === ""; 

  useEffect(() => {
    if (word.trim() === "") {
      setIsPalindrome(false);
    }
  }, [word]);

  return (
    <div className="container">
      <h1>Palindrome Checker</h1>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Escribe una palabra"
      />

      {isInputEmpty ? (
        <strong className="palindrome-advice">Por favor ingresa una palabra para ver si es un palindromo</strong>
      ) : (
        <Button variant="primary" evento={checkPalindrome}>
          Check Palindromo
        </Button>
      )}

      {!isInputEmpty &&
        (isPalindrome ? (
          <p>La palabra es palindroma!</p>
        ) : (
          <p>La palabra no es palindroma</p>
        ))}
    </div>
  );
}

export default PalindromeChecker;
