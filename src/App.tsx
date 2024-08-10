import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useMainContract } from "./hooks/useMainContract";
import { useTonConnect } from "./hooks/useTonConnect";
import {fromNano} from "ton-core";
import WebApp from "@twa-dev/sdk";

WebApp.showAlert("Нажми меня")


function App() {
  const {
    contract_address,
    counter_value,
    //recent_sender,
    //owner_address,
    sendIncrement,
    sendDeposit,
    sendWithdrawalRequest,
    contract_balance,
  } = useMainContract();

  const { connected } = useTonConnect()

  const showAlert = () => {
    WebApp.showAlert("Нажми меня");}
  return (
    <div>
      <div>
        <TonConnectButton />
      </div>
      <div>
        <div className='Card'>
          <b>{WebApp.platform}</b>
          <b>Our contract Address</b>
          <div className='Hint'>{contract_address?.slice(0, 30) + "..."}</div>
          <b>Our contract Balance</b>
          {contract_balance && (
            <div className='Hint'>{fromNano(contract_balance)}</div>
          )}
        </div>

        <div className='Card'>
          <b>Counter Value</b>
          <div>{counter_value ?? "Loading..."}</div>
        </div>
        <a
                onClick={() => {
                  showAlert();
                }}
              >
              </a>
            <br/>
        {connected && (
              <a
                onClick={() => {
                  sendIncrement();
                }}
              >
                Show alert
              </a>
            )}
            <br/>
        {connected && (
              <a
                onClick={() => {
                  sendDeposit();
                }}
              >
                Request deposit 1 TON
              </a>
            )}
            <br/>
        {connected && (
              <a
                onClick={() => {
                  sendWithdrawalRequest();
                }}
              >
                Request 0.7 TON withdrawal
              </a>
            )}
      </div>
    </div>
  );
}

export default App;