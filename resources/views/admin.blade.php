@extends('layouts/app')

@section('content')

<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Data</div>
                <div class="panel-body">

                  <form action="/admin/download" method="post" class="form">
                    <div class="form-group">
                      <label for="date">Data from the following date forward</label>
                      <input type="text" name="date" class="form-control datepicker">
                      
                    </div>
                    <input type="submit" value="download" class="btn btn-success">
                  </form>
                  
                </div>
            </div>
        </div>
    </div>
</div>


@endsection