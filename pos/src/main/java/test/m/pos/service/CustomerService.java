package test.m.pos.service;

import javax.transaction.Transactional;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import test.m.pos.dao.AbstractDaoImpl;
import test.m.pos.dao.CustomerDao;
import test.m.pos.dto.Customer;

@Service
@Transactional
public class CustomerService implements CustomerDao {
	
	@Autowired
	SessionFactory sessionFactory;
	
}
