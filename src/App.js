import "./App.css";
import { Cloud, Clouds, Environment, Float, Scroll, ScrollControls, Sparkles } from "@react-three/drei";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Bloom, DepthOfField, EffectComposer, Vignette } from "@react-three/postprocessing";
import { DoubleSide, PlaneGeometry } from "three";
import { extend, useLoader } from "@react-three/fiber";
import * as THREE from 'three';
import { ListGroup } from "react-bootstrap";
extend({ PlaneGeometry })

export default function App() {
  const backendFrameworks = ["Express.js", "Nest.js", "Loopback.js", "Strapi"];
  return (
    <>
      <color attach="background" args={["#000"]} />
      <EffectComposer>
        {/* <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={5} height={480} /> */}
        <Bloom intensity={2} luminanceThreshold={0.1} luminanceSmoothing={0.9} height={1000} />
        <Vignette eskil={false} offset={0.1} darkness={1.5} />
      </EffectComposer>


      {/* <fog attach="fog" args={["white", 10, 70]} /> */}
      <ambientLight intensity={0.2} />
      <spotLight position={[0, 25, 0]} angle={1.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
      <Environment preset="warehouse" />

      <ScrollControls pages={5} damping={0.25}>
        <Scroll>
          <Clouds material={THREE.MeshBasicMaterial}>
            <Cloud seed={1} scale={1} volume={5} color="white" fade={100} />
          </Clouds>
          <Clouds material={THREE.MeshBasicMaterial} position={[0, -8,0 ]}>
            <Cloud seed={112} scale={1} volume={5} color="lightgreen" fade={100} />
          </Clouds>
          <Clouds material={THREE.MeshBasicMaterial} position={[0, -16,0 ]}>
            <Cloud seed={110} scale={1} volume={5} color="lightblue" fade={100} />
          </Clouds>
          <Clouds material={THREE.MeshBasicMaterial} position={[0, -24,0 ]}>
            <Cloud seed={110} scale={1} volume={5} color="yellow" fade={100} />
          </Clouds>
          <Clouds material={THREE.MeshBasicMaterial} position={[0, -31,0 ]}>
            <Cloud seed={110} scale={1} volume={5} color="#850F8D" fade={100} />
          </Clouds>

          {/* <Float
            position={[0, 0, -10]}
            speed={1} // Animation speed, defaults to 1
            rotationIntensity={1} // XYZ rotation intensity, defaults to 1
            floatIntensity={2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
          >
            <mesh position={[-3, -0, -3]} rotation={[0, 0, Math.PI / 2]} scale={5}>
              <planeGeometry />
              <meshBasicMaterial transparent={true} alphaTest={1} alphaMap={texture} color="white" side={DoubleSide} />
            </mesh>
            <mesh position={[5, -1, -1]} rotation={[0, 0, -Math.PI / 2]} scale={5}>
              <planeGeometry />
              <meshBasicMaterial transparent={true} alphaTest={0} alphaMap={texture} color="white" side={DoubleSide} />
            </mesh>
            <mesh position={[-10, -5, -5]} rotation={[0, 0, Math.PI / 2]} scale={5}>
              <planeGeometry />
              <meshBasicMaterial transparent={true} alphaTest={0} alphaMap={texture} color="white" side={DoubleSide} />
            </mesh>
          </Float> */}
          {/* top */}
          <Float
            speed={1} // Animation speed, defaults to 1
            rotationIntensity={2} // XYZ rotation intensity, defaults to 1
            floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
          >
            <Sparkles
              noise={0}
              count={500}
              speed={0.01}
              size={0.6}
              color={"#FFD2BE"}
              opacity={10}
              scale={[20, 100, 20]}
            ></Sparkles>
          </Float>
          {/* top */}
        </Scroll>
        <Scroll html style={{ width: "100%" }}>
          <Container style={{ height: "100px", position: "relative" }}>
            <Row
              className="text-center align-items-center justify-content-center"
              style={{ position: "absolute", width: "100%", height: "100vh", padding: "0px 30px 0px" }}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px" }}>Full Stack Enginner</h1>
                  <h2>From idea to delivery</h2>
                </div>
              </Col>
            </Row>
            <Row
              className="text-center align-items-center justify-content-center"
              style={{ position: "absolute", width: "100%", height: "100vh", padding: "0px 30px 0px", top: "100vh" }}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px" }}>Front End</h1>
                </div>
                <Row>
                  <Col xs={6}>
                    <h2>Frameworks</h2>
                    <ListGroup data-bs-theme="dark">
                      {['React.js', 'Vue.js', 'Ext.js'].map((item) => (
                        <ListGroup.Item>{item}</ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Col>
                  <Col xs={6}>
                    <h2>Libraries</h2>
                    <ListGroup data-bs-theme="dark">
                      {['Three.js', 'Theatre.js', 'jQuery'].map((item) => (
                        <ListGroup.Item>{item}</ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Col>
                </Row>

              </Col>
            </Row>
            <Row
              className="text-center align-items-center justify-content-center"
              style={{ position: "absolute", width: "100%", height: "100vh", padding: "0px 30px 0px", top: "200vh" }}
            >
              <Col xs={6}>
                <div className="content">
                  <h1 style={{ marginBottom: "0px" }}>Back End</h1>
                  <ListGroup data-bs-theme="dark">
                    {backendFrameworks.map((item) => (
                      <ListGroup.Item>{item}</ListGroup.Item>
                    ))}
                  </ListGroup>
                </div>
              </Col>
            </Row>
            <Row
              className="text-center align-items-center justify-content-center"
              style={{ position: "absolute", width: "100%", height: "100vh", padding: "0px 30px 0px", top: "300vh" }}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px" }}>Mobile</h1>
                </div>
                <h3>Frameworks</h3>
                <ListGroup data-bs-theme="dark" style={{ marginBottom: '2em' }}>
                  {['React Native', 'PhoneGap'].map((item) => (
                    <ListGroup.Item>{item}</ListGroup.Item>
                  ))}
                </ListGroup>
                <h3>Programming Languages</h3>
                <ListGroup data-bs-theme="dark">
                  {['JavaScript', 'Swift', 'Java'].map((item) => (
                    <ListGroup.Item>{item}</ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
            </Row>
            <Row
              className="text-center align-items-center justify-content-center"
              style={{ position: "absolute", width: "100%", height: "100vh", padding: "0px 30px 0px", top: "400vh" }}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px" }}>Architect</h1>
                </div>
              </Col>
            </Row>
          </Container>
        </Scroll>
      </ScrollControls>
    </>
  );
}
