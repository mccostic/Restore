﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
 
    public class ProductsController : BaseApiController
    {
        private readonly StoreContext _context;
        public ProductsController(StoreContext context)
        {

            _context = context;
        }

      

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts() {
            return  await _context.Products.ToListAsync();
           
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<List<Product>>> GetProduct(int id)
        {
            var products = await _context.Products.FindAsync(id);
            return Ok(products);
        }
    }
}
