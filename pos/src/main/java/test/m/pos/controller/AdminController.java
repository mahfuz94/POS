package test.m.pos.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin")
public class AdminController {

	@RequestMapping({"/", "/home"})
	public String adminHome() {
		return "adminPanel";
	}
}
