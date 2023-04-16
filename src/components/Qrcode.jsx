import QRCode from "qrcode.react";
const Qrcode = ({ shortUrl }) => {
  return (
    <div>
      {shortUrl && (
        <QRCode
          id="123456"
          className="max-w-sm rounded-lg shadow-2xl"
          value={shortUrl}
          size={290}
          level={"H"}
          includeMargin={true}
        />
      )}
    </div>
  );
};

export default Qrcode;
