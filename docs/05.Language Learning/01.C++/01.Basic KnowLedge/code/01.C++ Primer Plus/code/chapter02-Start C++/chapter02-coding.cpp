#include <iostream>
void printTime(int,int);

using namespace std;

int main()
{
	// 用户输入小时数和分钟数
	// 输出：
	/*
		Enter the number of hours：9
		Enter the number of minutes：28
		Time：9:28
	*/

	// 1. 创建变量
	int hour;
	int minute;

	// 2.创建方法
	cout << "Please input the hour：";
	cin >> hour;
	cout << "Please input the minute：";
	cin >> minute;
	// 3.调用函数
	printTime(hour, minute);

	return 0;
}

void printTime(int hours,int minutes)
{
	cout << "Enter the number of hours：" << hours << endl;
	cout << "Enter the number of minutes：" << minutes << endl;
	cout << "Time：" << hours << ":" << minutes << endl;
}