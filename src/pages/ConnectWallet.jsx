import "../App.css";
import Button from "../components/Button";

function ConnectWallet({ connectwallet }) {
  return (
    <div className="connect-wallet">
      <div className="connect-wallet-left">
        <h1>
          Access your <span className="highlight">certificate</span> world wide
          by <span className="highlight">connecting</span> to blockcert
        </h1>
      </div>
      <div className="connect-wallet-right">
        <span>Connect to your wallet</span>
        <Button text="Connect" buttonAction={connectwallet} />
      </div>
    </div>
  );
}

export default ConnectWallet;
