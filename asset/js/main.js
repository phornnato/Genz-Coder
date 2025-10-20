document.addEventListener("DOMContentLoaded", function () {
  const khmerSnippets = [
    `- សិក្សាទាំងទ្រឹស្ដីនិងការអរនុវត្ត
    - មេរៀនស្តង់ដាចាប់ផ្ដើមពីកំរិតដំបូង
    - អាចព្រឹក្សាយោលបល់បន្ថែមនៅចំណុចខ្វះខាត
    សូមចាប់ផ្ដើមពីឥឡូវនេះដើម្បីពង្រឹងសមត្ថភាពរបស់លោកអ្នក។`,
  ];

  // Code snippets (React, C++, Java)
  const codeSnippets = [
    `const App = () => {
  return (
    <h1>Hello React</h1>
  );
}`,
    `#include <iostream>

int main() {
  std::cout << "Hello, C++!" << std::endl;
  return 0;
}`,
    `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello, Java!");
  }
}`,
  ];

  // Escape HTML characters
  function escapeHTML(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function startTyping(element, snippets) {
    let snippetIndex = 0;
    let charIndex = 0;
    let displayed = "";
    let deleting = false;

    function type() {
      const currentSnippet = snippets[snippetIndex];

      if (!deleting) {
        if (charIndex < currentSnippet.length) {
          displayed += currentSnippet[charIndex];
          charIndex++;
          element.innerHTML =
            escapeHTML(displayed).replace(/\n/g, "<br>") +
            '<span class="cursor"></span>';
          setTimeout(type, 50);
        } else {
          deleting = true;
          setTimeout(type, 2000);
        }
      } else {
        if (charIndex > 0) {
          displayed = displayed.slice(0, -1);
          charIndex--;
          element.innerHTML =
            escapeHTML(displayed).replace(/\n/g, "<br>") +
            '<span class="cursor"></span>';
          setTimeout(type, 30);
        } else {
          deleting = false;
          snippetIndex = (snippetIndex + 1) % snippets.length;
          setTimeout(type, 500);
        }
      }
    }

    type();
  }

  startTyping(document.getElementById("typingCode1"), khmerSnippets);
  startTyping(document.getElementById("typingCode2"), codeSnippets);
});
