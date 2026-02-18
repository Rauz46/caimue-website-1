import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
    width: 32,
    height: 32,
};
export const contentType = "image/png";

// Brand Colors
const brandPurple = "#6B21A8";
const brandPink = "#DB2777";

// Icon generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse component tree
            <div
                style={{
                    fontSize: 22,
                    background: `linear-gradient(to bottom right, ${brandPurple}, ${brandPink})`,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "20%",
                    color: "white",
                    fontWeight: 800,
                    fontFamily: "serif",
                }}
            >
                C
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    );
}
