import { useEffect, useState } from "react";
import "./App.css";
import { Provider, Wallet } from "fuels";
import { TestScript } from "./sway-api";
import { counterContract, anotherContract } from "./sway-api/contract-ids.json";

function App() {
  // const [wallet, setWallet] = useState<WalletUnlocked>();
  const [script, setScript] = useState<TestScript>();

  useEffect(() => {
    (async () => {
      const provider = await Provider.create(
        "http://127.0.0.1:4000/v1/graphql"
      );
      const wallet = Wallet.fromPrivateKey("0x01", provider);
      // setWallet(wallet);
      const script = new TestScript(wallet);
      setScript(script);
    })();
  }, []);

  const runScript = async () => {
    const tx = await script
      ?.setConfigurableConstants({
        COUNTER_CONTRACT_ID: {
          bits: counterContract,
        },
        ANOTHER_CONTRACT_ID: {
          bits: anotherContract,
        },
      })
      .functions.main()
      .call();

    const result = await tx?.waitForResult();

    console.log(result?.value.toNumber());
  };

  return (
    <>
      <h1>Fuel</h1>

      <button onClick={runScript}>Run Script</button>
    </>
  );
}

export default App;
