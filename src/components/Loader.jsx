import { Html, useProgress } from "@react-three/drei";

//code belongs to https://github.com/adrianhajdin/project_3D_developer_portfolio/blob/main/src/hoc/SectionWrapper.jsx. 
//proper citations will be added soon

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html as='div' center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}>
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}>
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;