# Lower/Upper Bound

## 1. Lower Bound (하한)

- **정의**: 찾고자 하는 값 이상($\ge$)인 데이터가 처음으로 나타나는 위치(인덱스)를 찾는 연산입니다.
- **의미**: "이 값보다 작지 않은(크거나 같은) 첫 번째 위치"를 찾습니다.

```javascript
function lower_bound(arr, target)
  set left = 0                         // 첫 번째 원소의 위치로 설정합니다.
  set right = arr.size - 1             // 마지막 원소의 위치로 설정합니다.
  set min_idx = arr.size               // 최소이므로, 답이 될 수 있는 값보다 더 큰 값으로 설정합니다.
  while left <= right                  // [left, right]가 유효한 구간이면 계속 수행합니다.
    set mid = (left + right) / 2       // 가운데 위치를 선택합니다.
    if arr[mid] >= target              // 만약에 선택한 원소가 target보다 같거나 크다면
      right = mid - 1                  // 왼쪽에 조건을 만족하는 숫자가 더 있을 가능성 때문에 right를 바꿔줍니다.
      min_idx = min(min_idx, mid)      // 같거나 큰 값들의 위치 중 최솟값을 계속 갱신해줍니다.
    else
      left = mid + 1                   // 작은 경우라면 left를 바꿔줍니다.

  return min_idx                       // 조건을 만족하는 최소 index 값을 반환합니다.
```

## 2. Upper Bound (상한)

- **정의**: 찾고자 하는 값 초과($>$)인 데이터가 처음으로 나타나는 위치(인덱스)를 찾는 연산입니다.
- **의미**: "이 값보다 큰 첫 번째 위치"를 찾습니다.

```javascript
function upper_bound(arr, target)
  set left = 0                         // 첫 번째 원소의 위치로 설정합니다.
  set right = arr.size - 1             // 마지막 원소의 위치로 설정합니다.
  set min_idx = arr.size               // 최소이므로, 답이 될 수 있는 값보다 더 큰 값으로 설정합니다.
  while left <= right                  // [left, right]가 유효한 구간이면 계속 수행합니다.
    set mid = (left + right) / 2       // 가운데 위치를 선택합니다.
    if arr[mid] > target               // 만약에 선택한 원소가 target보다 크다면
      right = mid - 1                  // 왼쪽에 조건을 만족하는 숫자가 더 있을 가능성 때문에 right를 바꿔줍니다.
      min_idx = min(min_idx, mid)      // 큰 값들의 위치 중 최솟값을 계속 갱신해줍니다.
    else
      left = mid + 1                   // 같거나 작은 경우라면 left를 바꿔줍니다.

  return min_idx                       // 조건을 만족하는 최소 index 값을 반환합니다.

```

## 3. 예시로 쉽게 이해하기

정렬된 배열이 다음과 같다고 가정해 봅시다.

> 배열: `[1, 2, 4, 4, 4, 6, 7]` (찾으려는 값: `4`)

- **`lower_bound(4)`의 결과**
- `4` 이상인 값이 처음 나오는 위치를 찾습니다.
- 결과: 첫 번째 `4`가 있는 **인덱스 2**를 반환합니다.

- **`upper_bound(4)`의 결과**
- `4`보다 큰($>$) 값이 처음 나오는 위치를 찾습니다.
- 결과: `4`를 지나쳐 그다음 숫자인 `6`이 있는 **인덱스 5**를 반환합니다.

## 4. 주요 활용처 (특정 값의 개수 구하기)

정렬된 데이터에서 **특정 값이 몇 개나 들어있는지** O(log N) 시간에 구할 때 두 함수를 조합해서 유용하게 사용합니다.

- **특정 값의 개수** = `upper_bound(값) - lower_bound(값)`
- 위 예시에서 `4`의 개수: `5(upper_bound 인덱스) - 2(lower_bound 인덱스) = 3개`
