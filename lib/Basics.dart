import 'package:flutter/material.dart';

class Basics extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Fluter Basics",
        style: TextStyle(color: Color(4278190080))),
        centerTitle: true,
        backgroundColor: Colors.indigoAccent,
      ),
      body: Container(
        child:Center(
          child: Text("Sithija Shehara"),
        )
      ),
    );
  }
}
