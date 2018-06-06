// 물류센터에 있는 컨베이어 벨트 앞에 여러 대의 트럭이 일렬로 늘어서 있고, 이 트럭들에 다양한 무게의 짐을 실으려고 합니다.
// 각 트럭은 최대 실을 수 있는 무게가 정해져 있으므로, 정해진 무게보다 더 많은 짐을 실을 수는 없습니다.
// 이 물류센터에서는 다음과 같은 규칙을 이용해서 각 트럭에 물건을 싣고 있습니다.

// 컨베이어 벨트는 왼쪽에서 오른쪽으로 이동합니다.
// 물건이 트럭 앞을 지날 때, 트럭에 실을 수 있는 남은 무게가 물건의 무게 이상이면 바로 싣습니다.
// 다음은 5대의 트럭에 5개의 짐을 싣는 예시를 보여주는 그림입니다.



// 위 예시에서 각 트럭의 제한 무게는[1, 4, 5, 2, 4] 이며, 각 짐의 무게는 ⓐ번 짐부터 순서대로[2, 4, 4, 3, 2]입니다.
// 이제, 각 짐이 컨베이어 벨트를 타고 차례로 오른쪽으로 이동해 갑니다.가장 먼저 ⓐ번 짐이 ①번 트럭 앞을 지나가지만,
// 트럭의 제한 무게보다 짐이 무거우므로 그대로 지나쳐 갑니다.오른쪽으로 이동해서 ⓐ번 짐은 이번에는 ②번 트럭 앞을 지나가게 됩니다.
// 이때, ②번 트럭의 제한 무게는 ⓐ번 짐의 무게보다 크기 때문에 ⓐ번 짐은 ②번 트럭에 실리게 되며, ②번 트럭의 남은 제한 무게는 2가 됩니다.
// 마찬가지로 뒤에 따라오던 ⓑ번 짐은 ②번 트럭 앞을 지나게 되지만 ⓐ번 짐이 먼저 실려 남은 제한 무게가 2이기 때문에 그냥 지나쳐 가고,
// 이후에 남은 제한 무게가 5인 ③번 트럭에 실리게 됩니다.이와 같은 과정을 계속 하면 ⓐ번 짐은 ②번 트럭에, ⓑ번 짐은 ③번 트럭에, ⓒ번 짐은 ⑤번 트럭에 실리며,
// ⓓ번 짐은 어떠한 트럭에도 실리지 않고, ⓔ번 짐은 ②번 트럭에 실리게 됩니다.

// 일렬로 늘어서 있는 각 트럭의 제한 무게가 순서대로 들어있는 배열 truck과 컨베이어벨트를 따라 이동하는 각 물건의 무게가 순서대로 들어있는 배열 w가
// 매개변수로 주어질 때, 각 물건이 실리게 되는 트럭의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성해주세요.
// 아무 데도 실리지 못하고 컨베이어 벨트의 오른쪽 끝까지 이동하게 되는 짐은 - 1로 표시하면 됩니다.