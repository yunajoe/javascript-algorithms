// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

/**
* 너비(width)와 높이(height)를 저장하는 Size 클래스
* 초기값을 인자로 받으며, 기본값은 각각 80, 60
  resize 메서드 : 새로운 너비와 높이로 크기를 변경
*/
export class Size {
  /**
   * @param {number} width
   * @param {number} height
   */
  constructor(width = 80, height = 60) {
    this.width = width;
    this.height = height;
  }
  /**
   *
   * @param {number} newWidth
   * @param {number} newHeight
   */
  resize(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
  }
}

/**
* 창 좌상단의 수평/수직 위치인 x와 y를 저장하는 Position 클래스
* 기본값은 둘 다 0
   새로운 위치로 좌표를 바꾸는 move(newX, newY) 메서드
*/

export class Position {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  /**
   *
   * @param {number} newX
   * @param {number} newY
   */
  move(newX, newY) {
    this.x = newX;
    this.y = newY;
  }
}
/**
*  프로그램 창을 나타내는 ProgramWindow 클래스
*  screenSize: 고정값 800 x 600 (Size 객체)
   size: 현재 창 크기 (Size 객체의 기본값으로 초기화)
   position: 현재 창 위치 (Position 객체의 기본값으로 초기화)
*/
export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    // 창이 현재 화면에서 어디에 위치해 있는지를 나타내는 값
    this.position = new Position();
  }
  // newSize는 new Size() 객체이다. (width, height)

  /**
   *
   * @param {Size} newSize
   */
  resize(newSize) {
    // 최소값
    const minWidth = Math.max(newSize.width, 1);
    const minHeight = Math.max(newSize.height, 1);
    // 최대값
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;
    this.size.width = Math.min(minWidth, maxWidth);
    this.size.height = Math.min(minHeight, maxHeight);
  }
  // 입력받은 Position 객체에 맞춰 창 위치를 이동하는 메서드
  // newPosition은 new Position() 객체
  /**
   *
   * @param {Position} newPosition
   */
  move(newPosition) {
    //  최소 위치는 x: 0, y: 0.
    const minX = Math.max(newPosition.x, 0);
    const minY = Math.max(newPosition.y, 0);
    // 최대 위치는 현재 창의 크기(size)와 화면 크기(screenSize)를 넘지 못함.
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    this.position.x = Math.min(minX, maxX);
    this.position.y = Math.min(minY, maxY);
  }
}

/**
 *
 * @param {ProgramWindow} programWindow
 * @returns
 */

export function changeWindow(programWindow) {
  programWindow.size.width = 400;
  programWindow.size.height = 300;
  programWindow.position.x = 100;
  programWindow.position.y = 150;

  return programWindow;
}
