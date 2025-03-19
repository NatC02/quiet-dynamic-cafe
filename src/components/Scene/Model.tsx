import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { Mesh, Group } from 'three'; // Import Mesh and Group types

interface ModelProps {
    scale: number;
}

export function Model({ scale }: ModelProps) {
    const { nodes, materials } = useGLTF('/cafe.glb');
    const groupRef = useRef<Group>(null);

    return (
        <group ref={groupRef} scale={scale} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={0.008}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group position={[-637.389, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.floor_building_0 as Mesh).geometry}
              material={materials.building}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.floor_floor1_0 as Mesh).geometry}
              material={materials.floor1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.floor_windows_0 as Mesh).geometry}
              material={materials.windows}
            />
          </group>
          <group position={[-185.408, 375.364, 308.477]}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.light_HangingLight1bulb_0 as Mesh).geometry}
              material={materials.HangingLight1bulb}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.light_HangingLight1wire_0 as Mesh).geometry}
              material={materials.HangingLight1wire}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.light_HangingLight1cover_0 as Mesh).geometry}
              material={materials.HangingLight1cover}
            />
          </group>
          <group position={[-468.531, 375.364, 308.477]}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.light1_HangingLight1bulb_0 as Mesh).geometry}
              material={materials.HangingLight1bulb}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.light1_HangingLight1wire_0 as Mesh).geometry}
              material={materials.HangingLight1wire}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.light1_HangingLight1cover_0 as Mesh).geometry}
              material={materials.HangingLight1cover}
            />
          </group>
          <group position={[-0.126, 74.142, 300.472]} rotation={[0, -0.868, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.round_table_RoundTable1stand_0 as Mesh).geometry}
              material={materials.RoundTable1stand}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.round_table_RoundTable1table_0 as Mesh).geometry}
              material={materials.RoundTable1table}
            />
          </group>
          <group position={[-546.619, -24.369, 68.748]} rotation={[0, 0.208, 0]} scale={0.17}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.computer_keyboard_Computercomputer2_0 as Mesh).geometry}
              material={materials.Computercomputer2}
              position={[171.996, 436.568, 132.75]}
              rotation={[-Math.PI, -1.273, -Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.computer_screen_Computercomputer2_0 as Mesh).geometry}
              material={materials.Computercomputer2}
              position={[168.734, 437.413, 131.416]}
              rotation={[-Math.PI, -1.273, -Math.PI]}
            />
          </group>
          <group position={[2.753, 57.226, 377.951]} rotation={[-Math.PI, -0.159, -Math.PI]}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.chair_Chairchair1_0 as Mesh).geometry}
              material={materials.Chairchair1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.chair_Chairchairleg_0 as Mesh).geometry}
              material={materials.Chairchairleg}
            />
          </group>
          <group position={[169.071, 57.226, 401.011]} rotation={[-Math.PI, 0.33, -Math.PI]}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.chair1_Chairchair1_0 as Mesh).geometry}
              material={materials.Chairchair1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.chair1_Chairchairleg_0 as Mesh).geometry}
              material={materials.Chairchairleg}
            />
          </group>
          <group position={[183.155, 57.226, 223.306]} rotation={[0, -0.11, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.chair2_Chairchair1_0 as Mesh).geometry}
              material={materials.Chairchair1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.chair2_Chairchairleg_0 as Mesh).geometry}
              material={materials.Chairchairleg}
            />
          </group>
          <group position={[-352.357, 71.698, 349.672]} rotation={[0.014, 0, 0]} scale={0.17}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.book_Book02cover_0 as Mesh).geometry}
              material={materials.Book02cover}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.book_Book02paper_0 as Mesh).geometry}
              material={materials.Book02paper}
            />
          </group>
          <group
            position={[-345.636, 38.997, 398.756]}
            rotation={[1.522, 0.003, -0.099]}
            scale={[0.17, 0.17, 0.141]}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.book1_Book03cover_0 as Mesh).geometry}
              material={materials.Book03cover}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.book1_Book03paper_0 as Mesh).geometry}
              material={materials.Book03paper}
            />
          </group>
          <group position={[-349.233, 172.674, 382.971]} rotation={[0.087, 0, -0.023]} scale={0.17}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.book2_Book02cover_0 as Mesh).geometry}
              material={materials.Book02cover}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.book2_Book02paper_0 as Mesh).geometry}
              material={materials.Book02paper}
            />
          </group>


          <group position={[-349.28, 172.563, 357.125]} rotation={[-0.2, 0, -0.037]} scale={0.17}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.book3_Book01cover_0 as Mesh).geometry}
              material={materials.Book01cover}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.book3_Book01paper_0 as Mesh).geometry}
              material={materials.Book01paper}
            />
          </group>
          <group
            position={[-349.795, 20.243, 357.136]}
            rotation={[-0.12, 0, 0]}
            scale={[0.17, 0.17, 0.141]}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.book4_Book02cover_0 as Mesh).geometry}
              material={materials.Book02cover}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.book4_Book02paper_0 as Mesh).geometry}
              material={materials.Book02paper}
            />
          </group>
          <group
            position={[-349.13, 19.724, 367.106]}
            rotation={[-0.428, 0.013, 0.008]}
            scale={[0.17, 0.17, 0.161]}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.book5_Book05cover_0 as Mesh).geometry}
              material={materials.Book05cover}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.book5_Book05paper_0 as Mesh).geometry}
              material={materials.Book05paper}
            />
          </group>
          <group position={[182.123, 74.142, 303.436]} rotation={[0, -0.868, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.RoundTable1round_table_RoundTable1stand_0 as Mesh).geometry}
              material={materials.RoundTable1stand}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.RoundTable1round_table_RoundTable1table_0 as Mesh).geometry}
              material={materials.RoundTable1table}
            />
          </group>
          <group position={[99.239, 375.364, 308.477]}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.HangingLight1light_HangingLight1bulb_0 as Mesh).geometry}
              material={materials.HangingLight1bulb}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.HangingLight1light_HangingLight1wire_0 as Mesh).geometry}
              material={materials.HangingLight1wire}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.HangingLight1light_HangingLight1cover_0 as Mesh).geometry}
              material={materials.HangingLight1cover}
            />
          </group>

          <group position={[6.208, 31.927, 268.497]} rotation={[0, 0.208, 0]} scale={0.17}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Computercomputer_keyboard_Computercomputer1_0 as Mesh).geometry}
              material={materials.Computercomputer1}
              position={[0, 436.568, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Computercomputer_screen_Computercomputer1_0 as Mesh).geometry}
              material={materials.Computercomputer1}
              position={[0, 436.568, 2.295]}
            />
          </group>
          <group position={[-30.238, 114.353, 274.553]} rotation={[0, -0.907, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.TallCoffeeCuplg_coffee_cup_TallCoffeeCuppaper_0 as Mesh).geometry}
              material={materials.TallCoffeeCuppaper}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.TallCoffeeCuplg_coffee_cup_TallCoffeeCupplastic_0 as Mesh).geometry}
              material={materials.TallCoffeeCupplastic}
            />
          </group>
          <group position={[-511.649, 51.074, 217.633]}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Bowlbowl_Bowlpasted__ceramic_0 as Mesh).geometry}
              material={materials.Bowlpasted__ceramic}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Bowlbowl_Bowlsoup_0 as Mesh).geometry}
              material={materials.Bowlsoup}
            />
          </group>
          <group position={[-525.74, 65.51, 50.541]} rotation={[0, -1.546, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.ShortCoffeeCupshort_coffee_cup_TallCoffeeCuppaper_0 as Mesh).geometry}
              material={materials.TallCoffeeCuppaper}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.ShortCoffeeCupshort_coffee_cup_TallCoffeeCupplastic_0 as Mesh).geometry}
              material={materials.TallCoffeeCupplastic}
            />
          </group>
          <group position={[-345.817, 250.273, 312.864]} rotation={[0, -0.545, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Globeglobe_Globeblinn1_0 as Mesh).geometry}
              material={materials.Globeblinn1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Globeglobe_Globelambert2_0 as Mesh).geometry}
              material={materials.Globelambert2}
            />
          </group>
          <group position={[205.01, 111.339, 326.774]} rotation={[-Math.PI, -0.6, -Math.PI]}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Cuplarge_cup_Cupceramic_0 as Mesh).geometry}
              material={materials.Cupceramic}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Cuplarge_cup_Cupcup_0 as Mesh).geometry}
              material={materials.Cupcup}
            />
          </group>
          <group position={[-500.442, 55.82, 137.58]} rotation={[-Math.PI, 1.276, -Math.PI]}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Mugmug_Mugmug1_0 as Mesh).geometry}
              material={materials.Mugmug1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Mugmug_Mugcoffee_0 as Mesh).geometry}
              material={materials.Mugcoffee}
            />
          </group>






          <group position={[-236.528, 8.995, 334.717]} rotation={[0, 1.536, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.ArmChairarm_chair_ArmChaircloth_0 as Mesh).geometry}
              material={materials.ArmChaircloth}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.ArmChairarm_chair_ArmChairblinn1_0 as Mesh).geometry}
              material={materials.ArmChairblinn1}
            />
          </group>
          <group position={[-224.006, 43.893, 133.164]} rotation={[-Math.PI, -1.553, -Math.PI]}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Couchcouch_Couchcouch1_0 as Mesh).geometry}
              material={materials.Couchcouch1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Couchcouch_Couchfeet_0 as Mesh).geometry}
              material={materials.Couchfeet}
            />
          </group>
          <group position={[-233.822, 8.569, 79.451]} rotation={[-Math.PI, 1.536, -Math.PI]}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.ArmChair1arm_chair_ArmChair1cloth_0 as Mesh).geometry}
              material={materials.ArmChair1cloth}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.ArmChair1arm_chair_ArmChair1blinn1_0 as Mesh).geometry}
              material={materials.ArmChair1blinn1}
            />
          </group>
          <group position={[-259.162, 132.209, 183.614]}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Lamp1lamp_Lamp1metal_0 as Mesh).geometry}
              material={materials.Lamp1metal}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Lamp1lamp_Lamp1lambert2_0 as Mesh).geometry}
              material={materials.Lamp1lambert2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Lamp1lamp_lambert1_0 as Mesh).geometry}
              material={materials.lambert1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Lamp1lamp_Lamp1bulb_0 as Mesh).geometry}
              material={materials.Lamp1bulb}
            />
          </group>
          <group position={[-211.803, 99.319, 236.048]} rotation={[0, 0.945, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Cup1large_cup_Cup1ceramic_0 as Mesh).geometry}
              material={materials.Cup1ceramic}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Cup1large_cup_Cup1cup_0 as Mesh).geometry}
              material={materials.Cup1cup}
            />
          </group>
          <group position={[-23.069, 57.226, 186.471]} rotation={[0, 0.551, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Chairchair_Chairchair1_0 as Mesh).geometry}
              material={materials.Chairchair1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Chairchair_Chairchairleg_0 as Mesh).geometry}
              material={materials.Chairchairleg}
            />
          </group>
          <group position={[-389.827, 8.275, 14.645]} scale={0.17}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Pillowpasted__pCube6_Pillowlambert2_0 as Mesh).geometry}
              material={materials.Pillowlambert2}
              position={[964.549, 2559.208, -354.178]}
              rotation={[2.376, 0.995, 2.218]}
            />
          </group>
          <group position={[-389.827, 8.275, 14.645]} scale={0.17}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Pillow1pasted__pCube6_Pillow3lambert3_0 as Mesh).geometry}
              material={materials.Pillow3lambert3}
              position={[1104.324, 2442.363, -284.023]}
              rotation={[2.33, 0.858, 2.234]}
            />
          </group>









          <group position={[-389.827, 8.275, 14.645]} scale={0.17}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Pillow2pasted__pCube6_Pillow3lambert3_0 as Mesh).geometry}
              material={materials.Pillow3lambert3}
              position={[798.01, 1827.502, 2937.543]}
              rotation={[0.911, 0.227, -1.868]}
            />
          </group>
          <group position={[-389.827, 8.275, 14.645]} scale={0.17}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Pillow3pasted__pCube6_Pillow3lambert2_0 as Mesh).geometry}
              material={materials.Pillow3lambert2}
              position={[281.398, 2550.228, 1353.333]}
              rotation={[0.5, -0.63, -1.275]}
            />
          </group>
          <group position={[-389.827, 8.275, 14.645]} scale={0.17}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Pillow4pasted__pCube6_Pillowpillow3_0 as Mesh).geometry}
              material={materials.Pillowpillow3}
              position={[265.959, 2140.895, 288.618]}
              rotation={[-0.832, 0.318, -1.259]}
            />
          </group>
          <group
            position={[151.707, 110.186, 301.279]}
            rotation={[Math.PI / 2, 0, 0.714]}
            scale={0.17}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Book01book_Book01cover_0 as Mesh).geometry}
              material={materials.Book01cover}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Book01book_Book01paper_0 as Mesh).geometry}
              material={materials.Book01paper}
            />
          </group>
          <group
            position={[-211.15, 69.249, 343.93]}
            rotation={[-Math.PI / 2, 0, 2.597]}
            scale={0.17}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Book02book_Book02cover_0 as Mesh).geometry}
              material={materials.Book02cover}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Book02book_Book02paper_0 as Mesh).geometry}
              material={materials.Book02paper}
            />
          </group>
          <group
            position={[-206.281, 69.97, 216.589]}
            rotation={[Math.PI / 2, 0, -0.517]}
            scale={0.17}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Book03book_Book03cover_0 as Mesh).geometry}
              material={materials.Book03cover}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Book03book_Book03paper_0 as Mesh).geometry}
              material={materials.Book03paper}
            />
          </group>
          <group
            position={[-204.981, 75.647, 217.733]}
            rotation={[-Math.PI / 2, 0, -3.006]}
            scale={0.17}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Book04book_Book04cover_0 as Mesh).geometry}
              material={materials.Book04cover}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Book04book_Book04paper_0 as Mesh).geometry}
              material={materials.Book04paper}
            />
          </group>
          <group
            position={[-349.794, 71.591, 310.767]}
            rotation={[0.07, 0.001, -0.026]}
            scale={0.17}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Book05book_Book05cover_0 as Mesh).geometry}
              material={materials.Book05cover}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Book05book_Book05paper_0 as Mesh).geometry}
              material={materials.Book05paper}
            />
          </group>

          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Low_Tablelow_table_Low_Tablewood_0 as Mesh).geometry}
            material={materials.Low_Tablewood}
            position={[-532.74, 30.601, 140.462]}
            scale={0.17}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.BookShelfbookshelf_BookShelfwood_0 as Mesh).geometry}
            material={materials.BookShelfwood}
            position={[-346.931, 165.815, 352.68]}
            rotation={[Math.PI, -Math.PI / 2, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Stairs03stairs2_Stairs03stairs_0 as Mesh).geometry}
            material={materials.Stairs03stairs}
            position={[-277.888, 167.455, -102.508]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.OpenBookopen_book_OpenBooklambert2_0 as Mesh).geometry}
            material={materials.OpenBooklambert2}
            position={[-519.275, 51.672, 168.75]}
            rotation={[0, 1.343, 0]}
            scale={0.17}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.LargePlatelg_plate_LargePlateceramic_0 as Mesh).geometry}
            material={materials.LargePlateceramic}
            position={[-511.266, 51.758, 217.433]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.SmallPlatesmall_plate_LargePlateceramic_0 as Mesh).geometry}
            material={materials.LargePlateceramic}
            position={[-38.679, 106.156, 210.394]}
            scale={0.17}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.side_tableside_table_side_tablewood_0 as Mesh).geometry}
            material={materials.side_tablewood}
            position={[-234.159, -8.202, 217.21]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.SmallPlate1small_plate_LargePlateceramic_0 as Mesh).geometry}
            material={materials.LargePlateceramic}
            position={[-454.973, 94.148, 119.365]}
            scale={0.17}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Spoonspoon_Spoon1metal_0 as Mesh).geometry}
            material={materials.Spoon1metal}
            position={[-516.329, 52.884, 203.078]}
            rotation={[-2.786, -0.918, -2.93]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Spoon1spoon_Spoon1metal_0 as Mesh).geometry}
            material={materials.Spoon1metal}
            position={[-200.091, 0, 93.633]}
            rotation={[0, -0.779, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Spoon2spoon_Spoon1metal_0 as Mesh).geometry}
            material={materials.Spoon1metal}
            position={[212.005, 114.472, 331.543]}
            rotation={[3.097, 0.621, 2.524]}
          />


          <group position={[-349.038, 169.07, 399.84]}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.BookStackpasted__book14_BookStackcover2_0 as Mesh).geometry}
              material={materials.BookStackcover2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.BookStackpasted__book14_BookStackpaper_0 as Mesh).geometry}
              material={materials.BookStackpaper}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.BookStackpasted__book14_BookStackcover6_0 as Mesh).geometry}
              material={materials.BookStackcover6}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.BookStackpasted__book14_BookStackcover3_0 as Mesh).geometry}
              material={materials.BookStackcover3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.BookStackpasted__book14_BookStackcover1_0 as Mesh).geometry}
              material={materials.BookStackcover1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.BookStackpasted__book14_BookStackcover5_0 as Mesh).geometry}
              material={materials.BookStackcover5}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.BookStackpasted__book14_BookStackcover4_0 as Mesh).geometry}
              material={materials.BookStackcover4}
            />
          </group>
          <group position={[-349.038, 118.688, 300.285]}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book14_BookStackcover2_0 as Mesh).geometry}
              material={materials.BookStackcover2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book14_BookStackpaper_0 as Mesh).geometry}
              material={materials.BookStackpaper}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book14_BookStackcover6_0 as Mesh).geometry}
              material={materials.BookStackcover6}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book14_BookStackcover3_0 as Mesh).geometry}
              material={materials.BookStackcover3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book14_BookStackcover1_0 as Mesh).geometry}
              material={materials.BookStackcover1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book14_BookStackcover5_0 as Mesh).geometry}
              material={materials.BookStackcover5}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book14_BookStackcover4_0 as Mesh).geometry}
              material={materials.BookStackcover4}
            />
          </group>





          <group position={[-349.038, 118.324, 366.582]}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book15_BookStackcover2_0 as Mesh).geometry}
              material={materials.BookStackcover2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book15_BookStackpaper_0 as Mesh).geometry}
              material={materials.BookStackpaper}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book15_BookStackcover6_0 as Mesh).geometry}
              material={materials.BookStackcover6}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book15_BookStackcover3_0 as Mesh).geometry}
              material={materials.BookStackcover3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book15_BookStackcover1_0 as Mesh).geometry}
              material={materials.BookStackcover1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book15_BookStackcover5_0 as Mesh).geometry}
              material={materials.BookStackcover5}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book15_BookStackcover4_0 as Mesh).geometry}
              material={materials.BookStackcover4}
            />
          </group>
          <group position={[-348.203, 67.975, 327.268]}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book18_BookStackcover2_0 as Mesh).geometry}
              material={materials.BookStackcover2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book18_BookStackpaper_0 as Mesh).geometry}
              material={materials.BookStackpaper}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book18_BookStackcover6_0 as Mesh).geometry}
              material={materials.BookStackcover6}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book18_BookStackcover3_0 as Mesh).geometry}
              material={materials.BookStackcover3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book18_BookStackcover1_0 as Mesh).geometry}
              material={materials.BookStackcover1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book18_BookStackcover5_0 as Mesh).geometry}
              material={materials.BookStackcover5}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book18_BookStackcover4_0 as Mesh).geometry}
              material={materials.BookStackcover4}
            />
          </group>


          <group position={[-349.038, 16.487, 300.526]}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book19_BookStackcover2_0 as Mesh).geometry}
              material={materials.BookStackcover2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book19_BookStackpaper_0 as Mesh).geometry}
              material={materials.BookStackpaper}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book19_BookStackcover6_0 as Mesh).geometry}
              material={materials.BookStackcover6}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book19_BookStackcover3_0 as Mesh).geometry}
              material={materials.BookStackcover3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book19_BookStackcover1_0 as Mesh).geometry}
              material={materials.BookStackcover1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book19_BookStackcover5_0 as Mesh).geometry}
              material={materials.BookStackcover5}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book19_BookStackcover4_0 as Mesh).geometry}
              material={materials.BookStackcover4}
            />
          </group>
          <group position={[-349.038, 169.07, 332.091]}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.BookStack2pasted__book14_BookStack2cover2_0 as Mesh).geometry}
              material={materials.BookStack2cover2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.BookStack2pasted__book14_BookStack2paper_0 as Mesh).geometry}
              material={materials.BookStack2paper}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.BookStack2pasted__book14_BookStack2cover6_0 as Mesh).geometry}
              material={materials.BookStack2cover6}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.BookStack2pasted__book14_BookStack2cover3_0 as Mesh).geometry}
              material={materials.BookStack2cover3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.BookStack2pasted__book14_BookStack2cover1_0 as Mesh).geometry}
              material={materials.BookStack2cover1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.BookStack2pasted__book14_BookStack2cover5_0 as Mesh).geometry}
              material={materials.BookStack2cover5}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.BookStack2pasted__book14_BookStack2cover4_0 as Mesh).geometry}
              material={materials.BookStack2cover4}
            />
          </group>





          <group position={[-349.038, 16.487, 300.526]}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book19_BookStackcover2_0 as Mesh).geometry}
              material={materials.BookStackcover2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book19_BookStackpaper_0 as Mesh).geometry}
              material={materials.BookStackpaper}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book19_BookStackcover6_0 as Mesh).geometry}
              material={materials.BookStackcover6}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book19_BookStackcover3_0 as Mesh).geometry}
              material={materials.BookStackcover3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book19_BookStackcover1_0 as Mesh).geometry}
              material={materials.BookStackcover1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book19_BookStackcover5_0 as Mesh).geometry}
              material={materials.BookStackcover5}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book19_BookStackcover4_0 as Mesh).geometry}
              material={materials.BookStackcover4}
            />
          </group>
          <group position={[-349.038, 169.07, 332.091]}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.BookStack2pasted__book14_BookStack2cover2_0 as Mesh).geometry}
              material={materials.BookStack2cover2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.BookStack2pasted__book14_BookStack2paper_0 as Mesh).geometry}
              material={materials.BookStack2paper}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.BookStack2pasted__book14_BookStack2cover6_0 as Mesh).geometry}
              material={materials.BookStack2cover6}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.BookStack2pasted__book14_BookStack2cover3_0 as Mesh).geometry}
              material={materials.BookStack2cover3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.BookStack2pasted__book14_BookStack2cover1_0 as Mesh).geometry}
              material={materials.BookStack2cover1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.BookStack2pasted__book14_BookStack2cover5_0 as Mesh).geometry}
              material={materials.BookStack2cover5}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.BookStack2pasted__book14_BookStack2cover4_0 as Mesh).geometry}
              material={materials.BookStack2cover4}
            />
          </group>

          <group position={[-347.877, 118.591, 333.283]}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book14_BookStack3cover2_0 as Mesh).geometry}
              material={materials.BookStack3cover2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book14_BookStack3paper_0 as Mesh).geometry}
              material={materials.BookStack3paper}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book14_BookStack3cover6_0 as Mesh).geometry}
              material={materials.BookStack3cover6}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book14_BookStack3cover3_0 as Mesh).geometry}
              material={materials.BookStack3cover3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book14_BookStack3cover1_0 as Mesh).geometry}
              material={materials.BookStack3cover1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book14_BookStack3cover5_0 as Mesh).geometry}
              material={materials.BookStack3cover5}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book14_BookStack3cover4_0 as Mesh).geometry}
              material={materials.BookStack3cover4}
            />
          </group>
          <group position={[-351.512, 68.004, 366.44]}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book16_BookStack3cover2_0 as Mesh).geometry}
              material={materials.BookStack3cover2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book16_BookStack3paper_0 as Mesh).geometry}
              material={materials.BookStack3paper}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book16_BookStack3cover6_0 as Mesh).geometry}
              material={materials.BookStack3cover6}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book16_BookStack3cover3_0 as Mesh).geometry}
              material={materials.BookStack3cover3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book16_BookStack3cover1_0 as Mesh).geometry}
              material={materials.BookStack3cover1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book16_BookStack3cover5_0 as Mesh).geometry}
              material={materials.BookStack3cover5}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book16_BookStack3cover4_0 as Mesh).geometry}
              material={materials.BookStack3cover4}
            />
          </group>

          <group position={[-349.038, 16.364, 333.915]}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book20_BookStack3cover2_0 as Mesh).geometry}
              material={materials.BookStack3cover2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book20_BookStack3paper_0 as Mesh).geometry}
              material={materials.BookStack3paper}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book20_BookStack3cover6_0 as Mesh).geometry}
              material={materials.BookStack3cover6}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book20_BookStack3cover3_0 as Mesh).geometry}
              material={materials.BookStack3cover3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book20_BookStack3cover1_0 as Mesh).geometry}
              material={materials.BookStack3cover1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book20_BookStack3cover5_0 as Mesh).geometry}
              material={materials.BookStack3cover5}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book20_BookStack3cover4_0 as Mesh).geometry}
              material={materials.BookStack3cover4}
            />
          </group>
          <group position={[-345.237, 17.666, 405.218]} rotation={[-1.614, 0.002, -0.097]}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book21_BookStack3cover2_0 as Mesh).geometry}
              material={materials.BookStack3cover2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book21_BookStack3paper_0 as Mesh).geometry}
              material={materials.BookStack3paper}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book21_BookStack3cover6_0 as Mesh).geometry}
              material={materials.BookStack3cover6}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book21_BookStack3cover3_0 as Mesh).geometry}
              material={materials.BookStack3cover3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book21_BookStack3cover1_0 as Mesh).geometry}
              material={materials.BookStack3cover1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book21_BookStack3cover5_0 as Mesh).geometry}
              material={materials.BookStack3cover5}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.pasted__book21_BookStack3cover4_0 as Mesh).geometry}
              material={materials.BookStack3cover4}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Pencilpencil_Pencilpencil1_0 as Mesh).geometry}
            material={materials.Pencilpencil1}
            position={[174.715, 108.394, 335.389]}
            rotation={[-0.009, -0.837, -0.011]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Notebookpasted__pTorus13_Notebooknotebook_0 as Mesh).geometry}
            material={materials.Notebooknotebook}
            position={[172.578, 106.33, 331.99]}
            rotation={[-Math.PI, -1.512, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.pasted__pTorus13_Notebooknotebook1_0 as Mesh).geometry}
            material={materials.Notebooknotebook1}
            position={[-409.504, 65.884, 188.587]}
            rotation={[-Math.PI, 0.741, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.pencil_Pencilpencil1_0 as Mesh).geometry}
            material={materials.Pencilpencil1}
            position={[-500.49, 50.725, 166.494]}
            rotation={[0.027, 1.209, -0.025]}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/cafe.glb')

