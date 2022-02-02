@extends('layouts.app')
@section('title','Users')
@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <table id="users_table" class="table table-responsive display table-hover my-0 w-100">
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Email</th>
                                <th> Previlêgio </th>
                                <th>Editar</th>
                                <th>Deletar</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($users as $user)
                                <td>{{$user->id}}</td>
                                <td>{{$user->email}}</td>
                                <td>{{$user->roles()->first()->name}}</td>
                                <td><a class="btn btn-warning" href="{{route('user.edit',$user->id)}}">Editar</a></td>
                                <td><button class="btn btn-danger" onclick="document.getElementById('user_{{$user->id}}_delete').submit()">Delete</button>
                                    <form action="{{route('user.destroy',$user->id)}}" method="post" id="user_{{$user->id}}_delete">
                                        @csrf
                                        @method('DELETE')
                                    </form>
                                </td>
                            @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@push('js')
    <script>

    </script>
@endpush