import React from "react";
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from "src/contexts/GlobalContext";
import slugify from "@sindresorhus/slugify";

function App({ test_branch = false }) {
  let helloworld = "helloworld";
  let helloanotherworld = "123";

  let helloEmpty;

  if (test_branch) {
    console.log("find true");
  } else {
    console.log("find false");
  }

  console.log("helloEmpty", helloEmpty);

  slugify("I ♥ Dogs");

  return (
    <div className="App">
      <pre>
        {JSON.stringify(
          {
            'slugify("I ♥ Dogs")': slugify("I ♥ Dogs"),
            "slugify('  Déjà Vu!  ')": slugify("  Déjà Vu!  "),
            "slugify('fooBar 123 $#%')": slugify("fooBar 123 $#%"),
            "slugify('я люблю единорогов')": slugify("я люблю единорогов"),
          },
          null,
          2,
        )}
      </pre>
    </div>
  );
}

export default App;
